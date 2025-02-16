public class Employee {
    private String firstName;
    private String lastName;
    private int employeeId;
    private String address;

public Employee(String firstName, String lastName, int employeeId, String address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeId  = employeeId;
    this.address  = address;

}

public String toString(){
    return firstName+" "+lastName+" "+employeeId+" "+ address;
}
//initializing default constructor
    public Employee(){
g
    }
//main method to test
    public static void main(String[] args){
    Employee e = new Employee("Sujan", "Shrestha", 15, "Monroe, Louisiana");
    System.out.println(e);
    }
}
