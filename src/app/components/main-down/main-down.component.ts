import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-down',
  templateUrl: './main-down.component.html',
  styleUrls: ['./main-down.component.css']
})
export class MainDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        'https://live-production.wcms.abc-cdn.net.au/24e8fb203f9e5ea321c27c44a158456c?impolicy=wcms_crop_resize&cropH=2807&cropW=4991&xPos=0&yPos=484&width=862&height=485',
      imageAlt: 'women refugee',
    },
    {
      imageSrc:
        'https://d1y8sb8igg2f8e.cloudfront.net/images/Ukraine_-_Damage.width-800.jpg',
      imageAlt: 'kids near destroyed house',
    },
    {
      imageSrc:
        'https://api.time.com/wp-content/uploads/2022/03/Ukraine.Cover_.Grid_.jpg',
      imageAlt: 'cover of Time magazine',
    },
    {
      imageSrc:
        'https://cdn.theatlantic.com/thumbor/njUKQTeW8lB8PG4roNJaau2de5s=/0x480:5000x3293/976x549/media/img/mt/2022/03/AP22068628295454/original.jpg',
      imageAlt: 'evacuation of pregnant woman in Mariupol',
    },
    {
      imageSrc:
        'https://media.defense.gov/2022/Feb/25/2002951810/1920/1080/0/220225-F-YT915-001.JPG',
      imageAlt: 'manifistation against ruSSians agression',
    }
  ]

}
