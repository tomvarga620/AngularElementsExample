import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Test2Component],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [TestComponent, Test2Component],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const testComponent = createCustomElement(TestComponent, {
      injector: this.injector,
    });

    const test2Component = createCustomElement(Test2Component, {
      injector: this.injector,
    });

    customElements.define('test-component', testComponent);
    customElements.define('test2-component', test2Component);
  }
}
