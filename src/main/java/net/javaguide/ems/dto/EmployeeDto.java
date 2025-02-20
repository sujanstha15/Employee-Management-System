package net.javaguide.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//this class will be used to transfer the data between client and server
//this is response for rest api
public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;


}
