import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-owner',
  templateUrl: './process-owner.component.html',
  styleUrls: ['./process-owner.component.css']
})
export class ProcessOwnerComponent implements OnInit {
  userDetails;
  role = 'Process owner';
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res=> {
        this.userDetails = res['user'];
        if (this.userDetails.role ==='processowner')
          this.userDetails.role = 'Process owner';
      },
      err=> {}
    )
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  
}
