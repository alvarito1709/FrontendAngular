import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHardSkillsComponent } from './modificar-hard-skills.component';

describe('ModificarHardSkillsComponent', () => {
  let component: ModificarHardSkillsComponent;
  let fixture: ComponentFixture<ModificarHardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHardSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarHardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
