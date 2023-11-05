import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoPrincipalComponent } from './conteudo-principal.component';

describe('ConteudoPrincipalComponent', () => {
  let component: ConteudoPrincipalComponent;
  let fixture: ComponentFixture<ConteudoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudoPrincipalComponent]
    });
    fixture = TestBed.createComponent(ConteudoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
