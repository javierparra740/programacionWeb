import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  clima: any;

  constructor(
    public usersService: UsersService,
    public climaService: ClimaService
    ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users.data);
    });
    this.climaService.getClima().subscribe(data => {
      this.clima = data;
      console.log(this.clima);
    })
  }
}
