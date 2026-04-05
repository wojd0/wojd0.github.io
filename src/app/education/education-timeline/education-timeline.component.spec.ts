import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTimelineComponent } from './education-timeline.component';

describe('EducationTimelineComponent', () => {
	let component: EducationTimelineComponent;
	let fixture: ComponentFixture<EducationTimelineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EducationTimelineComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(EducationTimelineComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
