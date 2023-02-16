import { Directive } from '@angular/core';
import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HostListener } from "@angular/core";
import {  Input } from '@angular/core'; // First, import Input
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() appHover = "";
  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appHover);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
