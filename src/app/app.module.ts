import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
     TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [TestComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const testComponent = createCustomElement(TestComponent, {
      injector: this.injector,
    });

    customElements.define('test-component', testComponent);
  }
}
