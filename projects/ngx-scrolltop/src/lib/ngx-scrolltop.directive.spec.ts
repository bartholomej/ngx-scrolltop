import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgxScrollTopDirective],
    template: '<span class="my-scroll-top-button" ngxScrollTop>Top</span>',
})
class TestComponent {
}

describe('NgxScrollTopDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent, NgxScrollTopDirective],
            providers: [NgxScrollTopCoreService]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should scroll to top when the host element is clicked', () => {
        const host = fixture.debugElement.query(By.directive(NgxScrollTopDirective));
        const core = host.injector.get(NgxScrollTopCoreService);
        const scrollSpy = vi.spyOn(core, 'scrollToTop');

        (host.nativeElement as HTMLElement).click();

        expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
});
