## SQL (sequel/relational) Database

# User Table 
id(PK)  , name , surname , emailId , issueBook (FK -> BOok.id)

1
2
3
4

# Book Table    
 id(PK) ,  title ,  author ,  gener , price , publiser 

 1
 2
 3
 4

 SELECT * FROM User 


 ----------------------------------
 ## NoSql  Database / Non-Relational Database  DB (MongoDB )
    >> Collections >> Documents

    Syntax 
        Doc1 :{
            "Key": "Value"
        }
        //BSON : Binary script object notation

# User Collections
   Doc1:{
    "_Id": ObjectId('edcr1325476'),
    "name":"Subhash",
    "surname":"Yadav"
    "emailId":""
   }
   Doc2:{

   }

    Doc3:{

   }

    Doc4:{

   }

    Doc45{

   }

# Book Collection 

Doc1:{
    "_id":ObjectId('tyhv36587')
    "title":"the little life"
    "author":"Subhash"
}
Doc2:{

}
Doc3:{
    
}
Doc4:{
    
}