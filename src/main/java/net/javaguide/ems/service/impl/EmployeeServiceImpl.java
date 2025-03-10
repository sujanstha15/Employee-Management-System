package net.javaguide.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguide.ems.dto.EmployeeDto;
import net.javaguide.ems.entity.Employee;
import net.javaguide.ems.exception.ResourceNotFoundException;
import net.javaguide.ems.mapper.EmployeeMapper;
import net.javaguide.ems.repository.EmployeeRepository;
import net.javaguide.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.stream.Collectors; //
import java.util.List;

@Service //this tells the spring container to creater spring bean for this class
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        //saving the employee jpa entity into database
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
       Employee employee =  employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResolutionException("Exception is not exist with given id: "+ employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
       List<Employee> employees =  employeeRepository.findAll();
       return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());

    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        //if employee is not found
       Employee employee =     employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with given id: " + employeeId)
        );
       employee.setFirstName(updateEmployee.getFirstName());
       employee.setLastName(updateEmployee.getLastName());
       employee.setEmail(updateEmployee.getEmail());

      Employee updatedEmployeeObj =  employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        //if employee is not found
        Employee employee =     employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with given id: " + employeeId)
        );

        employeeRepository.deleteById(employeeId);
    }
}
