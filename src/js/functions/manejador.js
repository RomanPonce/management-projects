export default function getForm(){
  const name = document.querySelector("#form_project-title").value
  const description = document.querySelector("#form_project-description").value
  return { name, description }
}