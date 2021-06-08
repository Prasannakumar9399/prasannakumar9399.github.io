var doctors = ["Charlie Moon", "Coni Star", "Kiston Misel", "John Nission", "Shubham shinde",
  "Neeraj Joshi"];

var hospitals = ["Apollo Hospital", "Fortis Hospital", "Rockland Hospital",
  "Primus Super Speciality Hosptal"];

var treatments = ["Orthopedic Surgery", "Cancer", "Cardiology", "Central Nervous System",
  "Allergic Disorders", "Neoplastics"];

window.onload = () => {
  var search_ref = document.querySelector('.input-h-2 input');
  var allArrays = doctors.concat(hospitals).concat(treatments);

  search_ref.addEventListener("keyup", (event) => {
    var parent = document.querySelector('.input-h-2');
    if (parent.hasChildNodes())
      parent.removeChild(parent.childNodes[2]);

    var ul_Element = document.createElement("ul");
    var res = [];
    var allArray = allArrays.map(e => e.toLowerCase());
    if (search_ref.value !== "")
      res = allArray.filter(ele => ele.startsWith(search_ref.value.trim().toLowerCase()));
    if (res.length == 0 && search_ref.value !== "") {
      var empty_li = document.createElement('li');
      empty_li.innerText = "No Data Found";
      empty_li.style.color = "red";
      empty_li.style.textAlign = "left";
      ul_Element.appendChild(empty_li);
    }
    else {
      res.forEach(ele => {
        var create_li = document.createElement('li');
        create_li.innerText = ele.charAt(0).toUpperCase() + ele.slice(1);
        create_li.style.color = "#008cff";
        // "#021433"
        create_li.style.cursor = "pointer";
        create_li.style.textAlign = "left";
        create_li.style.borderBottom = "1px solid #d4d4d4"
        create_li.addEventListener("mouseenter",()=>{
          create_li.style.backgroundColor = "#DCDCDC";
        })
        create_li.addEventListener("mouseleave",()=>{
          create_li.style.backgroundColor = "#fff";
        })
        ul_Element.appendChild(create_li);
      })
    }

    parent.appendChild(ul_Element);
    var ul_ref = document.querySelector('.input-h-2 ul');
    ul_ref.style.position = "absolute";
    ul_ref.style.top = "50px";
    ul_ref.style.width = "100%";
    ul_ref.style.left = "0";
    ul_ref.style.border = "1px solid #d4d4d4";
    ul_ref.style.borderTop = "none";
    ul_ref.style.backgroundColor = "white";


    if(document.querySelector(".input-h-2 ul li") != null){
      var li_refs = document.querySelectorAll(".input-h-2 ul li");
        li_refs.forEach(ele => {
          ele.addEventListener("click",(event)=>{
                search_ref.value = ele.innerText;
                document.querySelector('.input-h-2 ul').style.display = "none";
          })
        })
      }
  })

  var input_ref = document.querySelector('.input-h-2');
  input_ref.addEventListener("mouseover", (event) => {
    var ul_ref = document.querySelector('.input-h-2 ul');
    if (ul_ref !== null)
      ul_ref.style.display = "block";

  })
  input_ref.addEventListener("mouseout", (event) => {
    var ul_ref = document.querySelector('.input-h-2 ul');
    if (ul_ref !== null)
      ul_ref.style.display = "none";

  })

  var search_Btn_ref = document.querySelector(".box .box-part .tab-input .btn button");
  search_Btn_ref.addEventListener("click",(event)=>{
       var search  =  search_ref.value.toLowerCase();
       var doctor = doctors.map(d => d.toLowerCase());
       var hospital = hospitals.map(h => h.toLowerCase());
       var treatment = treatments.map(t => t.toLowerCase());
       if(doctor.includes(search)){
        location.href = "doctor.html";
      }
      else if(hospital.includes(search))
      location.href = "hospital.html";

      else if(treatment.includes(search))
      location.href = "treatment.html";
  })

}
