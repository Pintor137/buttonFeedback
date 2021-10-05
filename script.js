const css = document.createElement("link");
css.setAttribute("rel","stylesheet");
css.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css");

const script1 = document.createElement("script");
script1.setAttribute("src","https://code.jquery.com/jquery-3.6.0.js");

const script2 = document.createElement("script");
script2.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js");


document.head.appendChild(css);
document.head.appendChild(script1);
document.head.appendChild(script2);

const container = document.getElementById("contenido_form");

container.innerHTML= `
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalFrm">
             Launch demo modal
    </button>

    <div class="modal fade" id="modalFrm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form id="frmEmail">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">
                        Nunca compartiremos su correo electrónico con nadie más..</small>
                    </div>

                    <div class="form-group">
                        <label for="email">Name</label>
                        <input type="email" class="form-control" id="name" aria-describedby="emailHelp">
                      
                    </div>

                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="btnSendFrm">Save changes</button>
                </div>
            </div>
        </div>
    </div>`;

    const btnSendFrm = document.getElementById("btnSendFrm");
    const frmEmail = document.getElementById("frmEmail");
    btnSendFrm.addEventListener("click",()=>{
        
        let email = document.getElementById("email").value; 
        let name = document.getElementById("name").value; 
       
        var url =  'http://192.168.43.110/sysurbanride/v2/test';
        var data =  {
            "txtname":name,
            "txtemail":email
        };

        $.post(url,data,(data,status)=>{
            if(status== 'success'){
                console.log("data:",data, "status: " ,status);
                frmEmail.reset();
                $('#modalFrm').modal('hide');   
            }
        })

      /*  fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));*/
    

    })

/*
 

      
  
*/