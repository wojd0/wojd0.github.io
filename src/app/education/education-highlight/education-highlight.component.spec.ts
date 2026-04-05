import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHighlightComponent } from './education-highlight.component';

describe('EducationHighlightComponent', () => {
	let component: EducationHighlightComponent;
	let fixture: ComponentFixture<EducationHighlightComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EducationHighlightComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(EducationHighlightComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
