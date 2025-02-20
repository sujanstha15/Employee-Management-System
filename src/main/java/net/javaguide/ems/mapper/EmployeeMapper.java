package net.javaguide.ems.mapper;

import net.javaguide.ems.dto.EmployeeDto;
import net.javaguide.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),        // Correct reference
                employee.getFirstName(), // Correct reference
                employee.getLastName(),  // Correct reference
                employee.getEmail()      // Fixed typo here (was: empployee.getEmail())
        );
    }
}
