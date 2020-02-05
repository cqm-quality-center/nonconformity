import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  userDetails;
  role = 'Employee';
  option = this.router.url;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res=> {
        this.userDetails = res['user'];
      },
      err=> {}
    )
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
