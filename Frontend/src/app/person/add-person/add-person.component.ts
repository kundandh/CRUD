
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit {
  addPersonForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addPersonForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      jobTitle: ['', Validators.required],
      voterid: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addPersonForm.valid) {
      // Handle form submission here (e.g., send data to API)
      console.log(this.addPersonForm.value);
    } else {
      // Form is invalid, handle validation errors
    }
  }
}
