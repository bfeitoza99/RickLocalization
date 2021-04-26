import { Provider, Type } from "@angular/core";

interface ModuleWithProviders<T> {
    ngModule: Type<T>
    providers?: Provider[]
  }