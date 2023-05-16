class Student{
    constructor(r,a,s,adr,m,e,sc,his)
    { // instance variable
         this.rollnumber = r;
        this.Age = a;
         this.standard = s;
         this.address = adr;
        this.maths= parseInt(m);
        this.english= parseInt(e);
        this.science= parseInt(sc);
        this.history = parseInt(his);
         
    }
    showdetails()
    {
        console.log('hi..');
        console.log(this.rollnumber);
        console.log(this.Age);
        console.log(this.standard);
        console.log(this.address);
    }
    getMarks(eng,maths,sci,hist)
    {
        this.history = Number(hist);
        this.english = Number(eng);
        this.maths = Number(maths);
        this.science = Number(sci);
    }   
    
    showResult()
    {
        let x = this.english + this.history;
        console.log(x);
        console.log("english=\t"+ this.english);
        console.log("maths=\t"+ this.maths);
        console.log("sceince=\t"+ this.science);
        console.log("history=\t"+ this.history);
        console.log("--------------------")
        let totalMarks = (this.history+
            this.science + this.maths+
            this.english);

        console.log("total=  "+totalMarks );
        console.log("--------------------")
        let per = (totalMarks/400)*100;

        console.log("percentage=  "+per );
        console.log("--------------------")
        if(per>=80)
        {
            console.log("Grade = A");
        }
        else if(per>=60 && per<80)
        {
            console.log("Grade = B");
        }
        else if(per<60)
        {
            console.log("Grade = c");
        }





    }
}
let s1= new Student(12,14,7,"india");
s1.showdetails();

let s2= new Student();
s2.showdetails();

s2.Age = 17;
s2.address ="newyork";
s2.rollnumber = 44;
s2.standard = 8;
s2.showdetails();

console.log(s2.address);
console.log(s1.Age+ s2.Age);

let s3 = new Student(100,12,6,"srilanka");
s3.showdetails();

s3.getMarks(34,45,70,55);
s3.showResult();


