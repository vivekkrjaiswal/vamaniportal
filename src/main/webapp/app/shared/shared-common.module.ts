import { NgModule } from '@angular/core';

import { VamaniportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [VamaniportalSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [VamaniportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VamaniportalSharedCommonModule {}
