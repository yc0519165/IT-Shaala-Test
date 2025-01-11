# IT-Shaala-Test
IT Shaala Coding Test

Section - 2 : Frontend
Question 1 Live Link - 

Question 2 Live Link - 

Section - 3 : SQL

Q1. Write SQL query for employe names Who have manegers and manegers names

SELECT 
    E.EmployeeName AS EmployeeName,
    M.EmployeeName AS ManagerName
FROM 
    Employee E
JOIN 
    Employee M
ON 
    E.ManagerID = M.EmployeeID;

Q2. Write SQL query for all employes whose city as same name thier corosponding manegers city.

SELECT 
    E.EmployeeName AS EmployeeName,
    M.EmployeeName AS ManagerName,
    E.City AS City
FROM 
    Employee E
JOIN 
    Employee M
ON 
    E.ManagerID = M.EmployeeID
WHERE 
    E.City = M.City;


Q3. Write SQL query for get all manegers with ID, name

SELECT DISTINCT 
    M.EmployeeID AS ManagerID,
    M.EmployeeName AS ManagerName
FROM 
    Employee M
WHERE 
    M.EmployeeID IN (SELECT DISTINCT ManagerID FROM Employee);

Q4. Write SQL query for return employes names whoes employe city = manegers city

SELECT 
    E.EmployeeName AS EmployeeName
FROM 
    Employee E
JOIN 
    Employee M
ON 
    E.ManagerID = M.EmployeeID
WHERE 
    E.City = M.City;


