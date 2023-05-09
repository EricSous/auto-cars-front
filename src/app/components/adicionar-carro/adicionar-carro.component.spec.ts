import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCarroComponent } from './adicionar-carro.component';

describe('AdicionarCarroComponent', () => {
  let component: AdicionarCarroComponent;
  let fixture: ComponentFixture<AdicionarCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
