import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ContainerDirective } from './container.directive';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { HeaderComponent } from './header/header.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from 'src/note.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerDirective,
    RowDirective,
    ColDirective,
    HeaderComponent,
    NoteTakerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
