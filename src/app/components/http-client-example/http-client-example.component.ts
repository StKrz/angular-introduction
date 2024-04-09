import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { ChuckNorrisJoke, DadJoke } from '../../shared/interfaces/jokes';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokeService = inject(JokesService)
  dadJoke = ''
  chuckNorrisJoke = ''

  ngOnInit(): void {
    // this.jokeService
    // .getDadJoke().subscribe((data: DadJoke) => {
    //   console.log(data.joke)
    //   this.dadJoke = data.joke
    // })
    this.refreshDadJoke()
    // this.jokeService
    // .getChuckNorrisJoke()
    // .subscribe((data: ChuckNorrisJoke) => {
    //   console.log(data.value)
    //   this.chuckNorrisJoke = data.value
    // })
    this.refreshChuckNorrisJoke()
  }

  refreshDadJoke() {
    this.jokeService
    .getDadJoke()
    .subscribe((data: DadJoke) => {
      // console.log(data.joke)
      this.dadJoke = data.joke
    })
  }

  refreshChuckNorrisJoke() {
    this.jokeService
    .getChuckNorrisJoke()
    .subscribe((data: ChuckNorrisJoke) => {
      // console.log(data.value)
      this.chuckNorrisJoke = data.value
    })
  }
}
