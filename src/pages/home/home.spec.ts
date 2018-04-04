import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { NavController } from 'ionic-angular';
import { IonicModule, Platform } from 'ionic-angular/index';

import { HttpClientModule } from '@angular/common/http';

describe('HomePage', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
        HttpClientModule
      ],
      providers: [
        NavController //if used then page dependencies.
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <ion-content> tag', () => {
    fixture.detectChanges();
    const article = fixture.debugElement.query(By.css('ion-content')).nativeElement;
    expect(article.innerText).toMatch(/oyster/i,
      '<ion-content> should contain "oyster" text');
  });

  it('length of array should be less then 4', () => {
    expect(comp.someArray.length).toBeLessThan(4);
  });

  it('should have <a tag>', () => {
    fixture.detectChanges();
    const lnk: HTMLLinkElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(lnk.href).toContain('http://ionicframework.com/docs/v2');
  });

  it('ionViewDidLoad should be present', () => {
    expect(comp.ionViewDidLoad).toBeDefined();
  });

});