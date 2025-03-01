
/* General Styling */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
}

/* Page Header */
.page-header {
    background: url('../images/programs/header-bg.jpg') center/cover no-repeat;
    text-align: center;
    padding: 80px 20px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
}

/* Main Content Layout */
.work-container {
    display: flex;
    max-width: 1200px;
    margin: auto;
    padding: 50px 20px;
}

/* Sidebar */
.sidebar {
    width: 250px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    font-size: 1.1rem;
    margin: 10px 0;
}

.filter-btn {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #0077cc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.filter-btn:hover {
    background: #005fa3;
}

/* Programs Grid */
.programs {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding-left: 30px;
}

.program-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.program-card img {
    width: 100%;
    border-radius: 10px;
}

.program-card h3 {
    margin: 15px 0;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    background: #0077cc;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.btn:hover {
    background: #005fa3;
}

/* Responsive */
@media screen and (max-width: 900px) {
    .work-container {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .programs {
        padding-left: 0;
    }
}
