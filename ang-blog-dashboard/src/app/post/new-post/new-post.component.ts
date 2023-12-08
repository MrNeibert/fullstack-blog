import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  permalink: string = '';



onTitlechanged(event: any) {
  const title = event.target.value
  this.permalink = title.toLowerCase().replace(/\s/g, '-')




}

}
