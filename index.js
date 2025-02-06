function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        document.addEventListener('click', closeSidebarOnClickOutside);
    } else {
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
}
function closeSidebarOnClickOutside(event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.querySelector('.menu-btn');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active');
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
}

function showForm(formType) {
    document.getElementById('spaces-form').style.display = 'none';
    document.getElementById('modules-form').style.display = 'none';

    if (formType === 'spaces') {
        document.getElementById('spaces-form').style.display = 'block';
        document.querySelector('.module-link.active').classList.remove('active');
        document.querySelector('[href="#spaces"]').classList.add('active');
    } else if (formType === 'modules') {
        document.getElementById('modules-form').style.display = 'block';
        document.querySelector('.module-link.active').classList.remove('active');
        document.querySelector('[href="#modules"]').classList.add('active');
    }
}

function toggleAllCheckboxes() {
    var checkboxes = document.querySelectorAll('.mat-item input[type="checkbox"]');
    var checkAll = document.getElementById('checkAllModules').checked;
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = checkAll;
    });
}