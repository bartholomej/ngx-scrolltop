import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
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
    let cdRef: ChangeDetectorRef;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent, NgxScrollTopDirective],
            providers: [NgxScrollTopCoreService]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        cdRef = fixture.componentRef.injector.get(ChangeDetectorRef);
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should scroll to top', async () => {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const p: HTMLElement | null = debugEl.querySelector('.my-scroll-top-button');

        // Make window scrollable
        document.body.style.minHeight = '1500px';
        window.scrollTo(0, 50);
        fixture.detectChanges();
        cdRef.detectChanges();

        p?.click();
        fixture.detectChanges();
        cdRef.detectChanges();

        setTimeout(() => {
            // Wait some time for smooth scroll
            expect(document.documentElement.scrollTop).toBe(0);
            ;
        }, 3000);
    });
});
