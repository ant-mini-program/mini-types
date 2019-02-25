declare namespace tinyapp {
  interface IComponentLifeCycleMethods {
    didMount?(): void;
    didUpdate?(): void;
    didUnmount?(): void;
  }

  interface IComponentMethods {
    [name: string]: (...args: any[]) => void;
  }

  interface IComponentInstance<P, D> {
    data: D;
    props: P;
    setData: SetDataMethod<D>;
  }

  type ComponentOptions<
    P extends Record<string, any> = Record<string, any>,
    D extends any = any,
    M extends IComponentMethods = IComponentMethods,
  > = IComponentLifeCycleMethods
    & {
      mixins?: Array<ComponentOptions<any, any, any>>;
      data?: D;
      props?: P;
      methods?: M & ThisType<IComponentInstance<P, D> & M>;
    }
    & ThisType<IComponentInstance<P, D> & M>;
}

declare function Component(options: tinyapp.ComponentOptions<Record<string, any>, any, tinyapp.IComponentMethods>): void;
