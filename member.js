
// Data for Present Members
const presentMembers = [
    { name: "Md Minhaj Ali", dept: "Physics", regNo: "NAZM2K160002" },
    { name: "Md Abdul Aziz", dept: "Mathematics", regNo: "NAZM2K160016" },
    { name: "Ahammad Mallick", dept: "Education", regNo: "NAZM2K160021" },
    { name: "Manikul Islam Sk", dept: "Biology", regNo: "NAZM2K160022" },
    { name: "Binoy Das", dept: "Education", regNo: "NAZM2K160024" },
    { name: "Sainul Mondal", dept: "Geography", regNo: "NAZM2K160028" },
    { name: "Yeakub Afsan Ali", dept: "Business Administration", regNo: "NAZM2K160029" },
    { name: "Shakil Ahmmed", dept: "CSE", regNo: "NAZM2K160037" },
    { name: "Shamim Shaikh", dept: "Medical Radiology", regNo: "NAZM2K160038" },
    { name: "Tousif Shaikh", dept: "Medical Radiology", regNo: "NAZM2K160039" },
    { name: "Md Afroz", dept: "Medical Radiology", regNo: "NAZM2K160041" },
    { name: "Mesbahul Islam", dept: "Law", regNo: "NAZM2K160043" },
    { name: "Najibur Rahaman", dept: "CSE", regNo: "NAZM2K160044" },
    { name: "Numan Karim", dept: "CSE", regNo: "NAZM2K160045" },
    { name: "Sarwar Rahaman", dept: "Geo-informatics", regNo: "NAZM2K160047" },
    { name: "Mahafuj Alom", dept: "Geo-informatics", regNo: "NAZM2K160048" },
    { name: "Md Imran", dept: "Physics", regNo: "NAZM2K160049" },
    { name: "Rehan Khan", dept: "CSE", regNo: "NAZM2K160050" },
    { name: "Rajib Soren", dept: "CSE", regNo: "NAZM2K160051" },
    { name: "Yeasir Tarique Mamun", dept: "B. Optom", regNo: "NAZM2K160052" },
    { name: "Md Abul kalam Azad", dept: "BMLT", regNo: "NAZM2K160053"},
];

// Data for Previous Members
const previousMembers = [
    { name: "Sakilur Rahaman Mondal", dept: "Physics", regNo: "NAZM2K160001"},
    { name: "Hemkanta Mandal", dept: "Mathematics", regNo: "NAZM2K160003"},
    { name: "Mir Nazmul Haque", dept: "Physics", regNo: "NAZM2K160004"},
    { name: "Nayan Mondal", dept: "Mathematics", regNo: "NAZM2K160005"},
    { name: "Abdul Basir", dept: "Physice", regNo: "NAZM2K160006"},
    { name: "Tanbir Ahmed", dept: "Physics", regNo: "NAZM2K160007"},
    { name: "Nur Alam", dept: "Mathematics", regNo: "NAZM2K160008"},
    { name: "Arindam Saha", dept: "English", regNo: "NAZM2K160009"},
    { name: "Mustakim Ansary", dept: "English", regNo: "NAZM2K160010"},
    { name: "Kajal Sk", dept: "Physics", regNo: "NAZM2K160011"},
    { name: "Ranit Ansary", dept: "Physics", regNo: "NAZM2K160012"},
    { name: "Sahidulla Anam", dept: "Phermacy", regNo: "NAZM2K160013"},
    { name: "Mosiul Hossain", dept: "Mathematics", regNo: "NAZM2K160014"},
    { name: "Sk Kamanujjaman", dept: "Mathematics", regNo: "NAZM2K160015"},
    { name: "Md Momin Molla", dept: "Physics", regNo: "NAZM2K160017"},
    { name: "Shribesh Goswami", dept: "Physics", regNo: "NAZM2K160018"},
    { name: "Laltu Das", dept: "Education", regNo: "NAZM2K160019"},
    { name: "Maidur Rahman", dept: "Education", regNo: "NAZM2K160020"},
    { name: "Parthapratim Dey", dept: "Life Science", regNo: "NAZM2K160023"},
    { name: "Bikash Murmu", dept: "Education", regNo: "NAZM2K160025"},
    { name: "Sk Imran Mondal", dept: "Geography", regNo: "NAZM2K160026"},
    { name: "Sohrab Hossain", dept: "Education", regNo: "NAZM2K160027"},
    { name: "Bakir Sk", dept: "Business Administration", regNo: "NAZM2K160030"},
    { name: "Obaidul Islam", dept: "Education", regNo: "NAZM2K160031"},
    { name: "Sanjib Jana", dept: "Mathematics", regNo: "NAZM2K160032"},
    { name: "Sulabh Mahata", dept: "Psychology", regNo: "NAZM2K160033"},
    { name: "Sagun Mandi", dept: "Chemistry", regNo: "NAZM2K160034"},
    { name: "Dr. Md Rumi", dept: "Doctor", regNo: "NAZM2K160035"},
    { name: "Sk Gulubuddin", dept: "Service Engineer", regNo: "NAZM2K160036"},
    { name: "Joydeb Debnath", dept: "Law", regNo: "NAZM2K160042"},
    { name: "Priyanshu Prasad", dept: "Law", regNo: "NAZM2K160046"},

];

// Function to Populate Table
function populateTable(members) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear previous rows

    members.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.dept}</td>
            <td>${member.regNo}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to Switch Between Present and Previous Members
function showMembers(type) {
    const tableTitle = document.getElementById('tableTitle');
    if (type === 'present') {
        tableTitle.textContent = 'Nazrul Mess Present Members';
        populateTable(presentMembers);
    } else {
        tableTitle.textContent = 'Nazrul Mess Previous Members';
        populateTable(previousMembers);
    }

    // Toggle active button styles
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active-button'));

    if (type === 'present') {
        buttons[0].classList.add('active-button');
    } else {
        buttons[1].classList.add('active-button');
    }

}

// Load Present Members by Default
window.onload = () => showMembers('present');

