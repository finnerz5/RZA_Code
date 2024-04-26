from bcrypt import checkpw, gensalt, hashpw
from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from sqlite3 import Error
import re

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

conn= None
try:
    conn = sqlite3.connect(r"Rigets_database.db")
    print(sqlite3.version)
except Error as e:
    print(e)

cus = conn.cursor()

cus.execute("""SELECT UserName, Password FROM RZA_Users""")
data = cus.fetchall()
logins = {}
for i in data:
    logins[i[0]] = i[1]
print(logins)

######################### CODE FOR USERS TO LOGIN ####################################

@app.route("/Login", methods=["POST"])
def Login():
    username = request.json["username"]
    GivenPassword = request.json["password"]
  
    GivenPassword = GivenPassword.encode("utf-8")

    

    if username in logins:
        try:
            conn = sqlite3.connect(r"Rigets_database.db")
            print(sqlite3.version)
        except Error as e:
            print(e)

        cu = conn.cursor()
        print(type(logins[username]))
        savedPassword = logins[username]
        cu.execute("""SELECT Password FROM RZA_Users WHERE UserName =?""", (username,))
        data = cu.fetchall()
        if len(data) == 1:
            if username == ".member":
                return jsonify({"message": "Member Login successful", "success": True}), 200
            
            elif checkpw(GivenPassword, savedPassword):
                return jsonify({"message": "Login successful", "success": True}), 200
            else:
                return jsonify({"message": "Password Invalid", "success": False}), 200
            
        else:
            return jsonify({"message": "Username Invalid", "success": False}), 200
    
    else:
        return jsonify({"message": "Username Invalid", "success": False}), 200
    
#################### CODE FOR CREATING USER ACCOUNTS###############################

@app.route("/SignUp", methods=["POST"])
def SignUp():
    username = request.json["username"]
    GivenPassword = request.json["password"]
    fname = request.json["fname"]
    lname = request.json["lname"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    dob = request.json["dob"]

    if len(username) <5 or len(username) > 16:
        print("password length not met.")
        return "Backend: Password length not met."
        
    
    password_params = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$"
    test = re.match(password_params, GivenPassword)
    print(test)
    if test == None:
        return "Backend: Password requirements not met."
    
    GivenPassword = GivenPassword.encode("utf-8")
 
    if username in logins:
        print(type(logins[username]))
        savedPassword = logins[username]

        if checkpw( GivenPassword, savedPassword):
            return "Sign up Successful.", 200
            
        else:
            return "Sign in failed.", 200
        
    else:
        conn = None
        try:
            conn = sqlite3.connect(r"Rigets_database.db")
            print(sqlite3.version)
        except Error as e:
            print(e)
        
        cu = conn.cursor()
        
        salt = gensalt()
        hashedPassword = hashpw(GivenPassword, salt)
        logins[username] = hashedPassword
        cu.execute("""INSERT INTO RZA_Users(FirstName, LastName, Mobile, Email, UserName, Password, DOB ) VALUES (?,?,?,?,?,?,?)""", (fname, lname, mobile, email, username,hashedPassword, dob))
        conn.commit()
        print(f"Logins: {logins}")
        return "Login created.", 200
 
#################### CODE FOR STORING TICKETS ###########################

@app.route("/Tickets", methods=["POST"])
def Tickets():
    date = request.json["Date"]
    name = request.json["name"]
    aticket = request.json["aticket"]
    cticket = request.json["cticket"]
    email = request.json["email"]
    mobile = request.json["mobile"]

    print(date, name, aticket, cticket)
    
    try:
        conn = sqlite3.connect(r"Rigets_database.db")
        print(sqlite3.version)
    except Error as e:
        print(e)

    cu = conn.cursor()
    cu.execute("""INSERT INTO Tickets (Name, Mobile, Email, AdultTicket, ChildTicket, Date) VALUES (?,?,?,?,?,?)""", (name, mobile, email, aticket, cticket, date))
    conn.commit()
    return jsonify({"message": "Booking successful", "Tickets Booked": True}), 200

#################### CODE FOR STORING Hotel Bookings ###########################

@app.route("/HotelBookings", methods=["POST"])
def HotelBookings():
    name = request.json["name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    aguests = request.json["aguest"]
    cguests = request.json["cguest"]
    startdate = request.json["startdate"]
    enddate = request.json["enddate"]
    room = request.json["room"]
    
    try:
        conn = sqlite3.connect(r"Rigets_database.db")
        print(sqlite3.version)
    except Error as e:
        print(e)

    cu = conn.cursor()
    cu.execute("""INSERT INTO HotelBookings (Name, Email, Mobile, AdultGuests, ChildGuests, StartDate, EndDate, Room) VALUES (?,?,?,?,?,?,?,?)""", (name, email, mobile, aguests, cguests, startdate, enddate, room))
    conn.commit()
    return jsonify({"message": "Booking successful", "Hotel Booked": True}), 200

##################### CODE FOR MEMBER SIGNUP ###########################
@app.route("/MemSign", methods=["POST"])
def MemSign():
    username = request.json["username"]
    GivenPassword = request.json["password"]
    fname = request.json["fname"]
    lname = request.json["lname"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    dob = request.json["dob"]


    member = username
    for words in [username, '.member']:
        if re.search(r'\b' + words + r'\b', member):
            print('{0} found'.format(words))

    if len(member) <5 or len(member) > 16:
        print("password length not met.")
        return "Backend: Password length not met."
        
    
    password_params = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$"
    test = re.match(password_params, GivenPassword)
    print(test)
    if test == None:
        return "Backend: Password requirements not met."
    
    GivenPassword = GivenPassword.encode("utf-8")

    if member in logins:
        print(type(logins[member]))
        savedPassword = logins[member]
        if checkpw( GivenPassword, savedPassword):
            return "member login up successful" 
        else:
            return "member Sign in failed.", 200
          
    else:
        conn = None
        try:
            conn = sqlite3.connect(r"Rigets_database.db")
            print(sqlite3.version)
        except Error as e:
            print(e)

        cus = conn.cursor()
            
        salt = gensalt()
        hashedPassword = hashpw(GivenPassword, salt)
        logins[member] = hashedPassword
        cus.execute("""INSERT INTO Members(FirstName, LastName,  Email, UserName, Password, Mobile, DOB ) VALUES (?,?,?,?,?,?,?)""", (fname, lname, email, username,hashedPassword, mobile, dob))
        conn.commit()
        print(f"Logins: {logins}")
        return jsonify({"message": "Sign up created", "member Sign up Successful.": True}), 200

if __name__ == "__main__":
    app.run()