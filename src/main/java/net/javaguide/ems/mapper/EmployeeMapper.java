package net.javaguide.ems.mapper;

import net.javaguide.ems.dto.EmployeeDto;
import net.javaguide.ems.entity.Employee;
import lombok.Generated;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),        // Correct reference
                employee.getFirstName(), // Correct reference
                employee.getLastName(),  // Correct reference
                employee.getEmail()      // Fixed typo here (was: employee.getEmail())
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
