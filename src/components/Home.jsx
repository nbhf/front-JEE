import axios from 'axios';
import {useEffect, useState } from "react";
import './styles.css';

function Student()
{
    //Logic

  const [studentid, setId] = useState('');
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/student/getall");
         setUsers(result.data);
         console.log("Fetched data:", result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/v1/student/save",
        {
        studentname: studentname,
        studentaddress: studentaddress,
          mobile: mobile
        });
          alert("Student Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

 
   async function editStudent(students)
   {
    setName(students.studentname);
    setAddress(students.studentaddress);
    setMobile(students.mobile); 
    setId(students._id);
   }
 
   async function DeleteStudent(studentid)
   {
        await axios.delete("http://localhost:8080/api/v1/student/delete/" + studentid); 
        alert("Student deleted Successfully");
        Load();
   }
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("http://localhost:8080/api/v1/student/edit/" + studentid ,
       {

        studentname: studentname,
        studentaddress: studentaddress,
         mobile: mobile
       
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Student Updateddd Failed");
       }
  }

  //Design

  return (
    <div>
       <h1>Student Details</h1>
<table class="table table-dark " align="center" style={{width: '80%' }}>
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student Address</th>
      <th scope="col">Student Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning" style={{ marginRight: '10px' }}  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
 </table>
 
 <br/>
 <h1>Add New Student</h1>
 <br/>
 
 <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Student Name</label>
                <input  type="text" class="form-control" id="studentname"
                value={studentname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Student Address</label>
                <input  type="text" class="form-control" id="studentaddress" 
                 value={studentaddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button className="btn btn-primary mt-4" style={{ marginRight: '10px' }} onClick={save}>Register</button>


              <button   class="btn btn-warning mt-4 mr-2"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
       </div>
            );
        }
  
  export default Student;