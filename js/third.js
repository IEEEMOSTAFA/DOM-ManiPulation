const main = document.getElementById('mani-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My dynamic section </h2>

    <p> Extra text added in the paragraph </p>
    <ul>
        <li>First Item </li>
        <li>First Item </li>
        <li>First Item </li>
        <li>First Item </li>
        <li>First Item </li>

    </ul>
`
main.appendChild(section);