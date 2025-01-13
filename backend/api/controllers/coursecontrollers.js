
const pool = require("../db/db");

//GET courses
const getCourses =  (req,res) =>{
    let sql = 'SELECT * FROM course';
    pool.query(sql, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results.rows);
        }
    });
    pool.end;
}

//post
const addCourse =  (req,res) =>{
    const {coursename,coursecode,credits,description,image}= req.body
    
    const insert_query = 'INSERT INTO course(coursename,coursecode,credits,description,image) VALUES($1,$2,$3,$4,$5)'
    
   pool.query(insert_query,[coursename,coursecode,credits,description,image],(err,result)=>{
       if(!err){
           console.log(result)
           res.send("posted data")
       } else{
           res.send(err)
       }
       pool.end;
   })
}
//updating 
const updateCourse =   (req,res)=>{
    const { id } = req.params;
    const { coursename,coursecode,credits,description,image } = req.body;
    const sql = `UPDATE course SET coursename = $1, coursecode = $2,credits = $3,description = $4,image = $5 WHERE id = $6`; 
    pool.query(sql, [coursename,coursecode,credits,description,image, id], (err, results) => { 
        if (results.rows.length === 0) {
            return res.json({ error: "Course not found" });
          }
        if (err) {
            res.json({ error: "Failed to update course" });
        };
        res.json({ message:"course updated succesfully" });

    }); 
}
//delete

const deleteCourse =  (req,res)=>{
    const { id } = req.params;
    const sql = `DELETE FROM course WHERE id= $1`; 
    pool.query(sql, [id], (err, results) => { 
        if (err) throw err; 
        res.json({ message:"course delted succesfully" });
    }); 
}

module.exports ={
    getCourses,
    addCourse: [addCourse],
    updateCourse:[updateCourse],
    deleteCourse:[deleteCourse],
};