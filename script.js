// --- APPLICATION STATE ---
// A single object to hold the application's state, making it easier to manage.
const appState = {
    currentUser: {
        role: 'viewer' // Default role is 'viewer'. Can be 'admin'.
    },
    currentView: {
        category: null,
        department: null
    },
    currentEditingService: null,
    allData: { /* Data is populated below */ }
};

// --- DATA ---
// This is the complete dataset for the prototype.
appState.allData = {
    categories: [
        {
            id: 1,
            name: "Servicios Académicos",
            departments: [
                { id: 1, name: "Trámites de matrícula y gestión académica", services: [{ name: "ADMISIÓN PROGRAMAS LICENCIATURA", tipo: "Trámite" }, { name: "MATRICULA", tipo: "Trámite" }, { name: "REINGRESOS", tipo: "Trámite" }, { name: "GRADUACIÓN", tipo: "Trámite" }, { name: "CAMBIO DE CARRERA", tipo: "Trámite" }, { name: "EXENCION DEL EXAMEN DE ADMISION", tipo: "Trámite" }] },
                { id: 2, name: "Apoyo académico y estudiantil", services: [{ name: "CENTROS DE INVESTIGACIÓN", tipo: "Servicio" }, { name: "PROGRAMA DE ACOMPAÑAMIENTO A ESCUELAS (DOP)", tipo: "Servicio" }] }
            ]
        },
        {
            id: 2,
            name: "Servicios Financieros y Administrativos",
            departments: [
                { id: 3, name: "Gestión financiera y presupuestaria", services: [{ name: "FORMULACIÓN PRESUPUESTARIA", tipo: "Trámite" }, { name: "MODIFICACIONES PRESUPUESTARIAS", tipo: "Trámite" }, { name: "LIQUIDACIÓN DE VIÁTICOS A FUNCIONARIOS", tipo: "Servicio" }, { name: "RECUPERACIÓN DE PRESTAMOS", tipo: "Trámite" }, { name: "FACTURACIÓN ELECTRONICA", tipo: "Trámite" }] },
                { id: 4, name: "Adquisiciones y servicios internos", services: [{ name: "ADQUISICIÓN DE BIENES Y SERVICIOS", tipo: "Trámite" }, { name: "TRANSPORTE INSTITUCIONAL", tipo: "Servicio" }, { name: "ENTREGA DE MERCADERÍA A DEPENDENCIAS INTERNAS", tipo: "Servicio" }] }
            ]
        },
        {
            id: 3,
            name: "Servicios de Infraestructura y Mantenimiento",
            departments: [
                { id: 5, name: "Mantenimiento y operaciones", services: [{ name: "MANTENIMIENTO GENERAL", tipo: "Servicio" }, { name: "LIMPIEZA DE EDIFICIOS INTERNA", tipo: "Servicio" }, { name: "MANTENIMIENTO ELECTROMECÂNICO", tipo: "Servicio" }] },
                { id: 6, name: "Gestión de espacios fisicos", services: [{ name: "AUDITORIOS", tipo: "Servicio" }, { name: "SALA DE REUNIONES", tipo: "Servicio" }, { name: "SOLICITUDES DE AULAS, LABORATORIOS U OTROS ESPACIOS FÍSICOS", tipo: "Servicio" }, { name: "PRESTAMO DE SALAS DE ESTUDIO", tipo: "Servicio" }, { name: "SALA 24/7", tipo: "Servicio" }, { name: "CUBICULOS INDIVIDUALES", tipo: "Servicio" }] }
            ]
        },
        {
            id: 4,
            name: "Servicios de Recursos Humanos",
            departments: [
                { id: 7, name: "Relaciones laborales y desarrollo", services: [{ name: "RELACIONES LABORALES (CLIMA LABORAL Y PROCEDIMIENTOS DISCIPLINARIOS)", tipo: "Servicio" }, { name: "EVALUACIÓN DEL DESEMPEÑO", tipo: "Trámite" }, { name: "COMPENSACION SALARIAL", tipo: "Servicio" }, { name: "GESTIÓN DEL DESEMPEÑO", tipo: "Servicio" }] },
                { id: 8, name: "Certificaciones y tramites de personal", services: [{ name: "SOLICITUD DE NOMBRAMIENTOS DE PERSONAL", tipo: "Trámite" }, { name: "REVISIÓN DE ATESTADOS (CONCURSOS, PASOS DE CATEGORÍA)", tipo: "Servicio" }, { name: "PROCESO DE CONTRATACIÓN DE PERSONAL", tipo: "Trámite" }] },
                { id: 9, name: "Empleo", services: [{ name: "Concursos de personal", tipo: "Trámite" }] }
            ]
        },
        {
            id: 5,
            name: "Servicios de Salud y Bienestar",
            departments: [
                { id: 10, name: "Atención médica", services: [{ name: "ATENCIÓN MÉDICA", tipo: "Servicio" }, { name: "ODONTOLOGÍA", tipo: "Servicio" }, { name: "ENFERMERIA", tipo: "Servicio" }, { name: "ATENCIÓN PSICOLÓGICA", tipo: "Servicio" }] },
                { id: 11, name: "Seguridad y gestión ambiental", services: [{ name: "GESTION DE RESIDUOS SOLIDOS INSTITUCIONALES", tipo: "Trámite" }, { name: "GESTIÓN DE LA SALUD OCUPACIONAL", tipo: "Servicio" }, { name: "PROTECCIÓN RADIOLÓGICA", tipo: "Servicio" }] }
            ]
        },
        {
            id: 6,
            name: "Servicios Tecnológicos y de innovación",
            departments: [
                { id: 12, name: "Soporte y desarrollo tecnológico", services: [{ name: "SOPORTE TÉCNICO", tipo: "Servicio" }, { name: "DESARROLLO DE SOFTWARE", tipo: "Servicio" }, { name: "ADMINISTRACIÓN DE SISTEMAS", tipo: "Servicio" }] },
                { id: 13, name: "Acceso a tecnologia", services: [{ name: "ACCESO A BASES DE DATOS EN LÍNEA", tipo: "Servicio" }] }
            ]
        },
        {
            id: 7,
            name: "Vinculación con la Comunidad y Extensión",
            departments: [
                { id: 14, name: "Relaciones institucionales", services: [{ name: "VINCULACIÓN UNIVERSIDAD EMPRESA", tipo: "Servicio" }, { name: "CONVENIOS", tipo: "Trámite" }, { name: "PROCESOS DE ACREDITACIÓN", tipo: "Trámite" }] }
            ]
        },
        {
            id: 8,
            name: "Servicios Bibliotecarios y Académicos",
            departments: [
                { id: 15, name: "Prestación de servicios bibliográficos", services: [{ name: "PRESTAMO INTERBIBLIOTECARIO", tipo: "Servicio" }, { name: "RENOVACIÓN EN LÍNEA", tipo: "Servicio" }] },
                { id: 16, name: "Gestión de colecciones y acceso a recursos", services: [{ name: "CATALOGO EN LINEA", tipo: "Servicio" }, { name: "ACCESO A BASES DE DATOS EN LINEA", tipo: "Servicio" }] }
            ]
        },
        {
            id: 9,
            name: "Gobierno Institucional y Representación",
            departments: [
                { id: 91, name: "Asamblea Institucional Representativa (AIR)", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 92, name: "Secretaría del Consejo Institucional", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 93, name: "Tribunal Institucional Electoral (TIE)", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 94, name: "Tribunal Disciplinario Formativo", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 95, name: "Dirección", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 96, name: "Dirección VIESA", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] }
            ]
        },
        {
            id: 10,
            name: "Gestión Estratégica y Control",
            departments: [
                { id: 97, name: "Auditoría Interna", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 98, name: "Coordinación MATEC", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 99, name: "Centro de Desarrollo Académico (CEDA)", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] }
            ]
        },
        {
            id: 11,
            name: "Servicios de Archivo y Documentación",
            departments: [
                { id: 100, name: "Centro de Archivo", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 101, name: "Unidad de Publicaciones", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
            ]
        },
        {
            id: 12,
            name: "Apoyo Psicoeducativo y Bienestar Estudiantil",
            departments: [
                { id: 107, name: "Asesoría legal para estudiantes", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 108, name: "VIESA - DEVESA - ORIENTACIÓN Y PSICOLOGÍA", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
            ]
        },
        {
            id: 13,
            name: "Laboratorios y Centros Académicos Especializados",
            departments: [
                { id: 114, name: "CAL - Laboratorio de Química y Física", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 115, name: "Escuela de Ingeniería Forestal - Centro de Investigación", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
            ]
        },
        {
            id: 14,
            name: "Generales de Apoyo",
            departments: [
                { id: 119, name: "Unidad de Conserjería", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 120, name: "GASEL (Gestión Ambiental)", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
            ]
        },
        {
            id: 15,
            name: "Innovación y Emprendimiento",
            departments: [
                { id: 124, name: "Administración de Empresas / TEC Emprende Lab", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] }
            ]
        },
        {
            id: 16,
            name: "Legal y Ética Institucional",
            departments: [
                { id: 125, name: "Asesoría Legal", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] },
                { id: 126, name: "UNECAL", services: [{ name: "Servicio 1", tipo: "Servicio" }, { name: "Servicio 2", tipo: "Servicio" }] }
            ]
        }
    ]
};

// Helper to ensure all services have the full structure with professional placeholders.
appState.allData.categories.forEach(category => {
    category.departments.forEach(department => {
        department.services.forEach(service => {
            const defaultData = {
                description: "Descripción detallada del servicio pendiente de definir.", categoria: "Pendiente", estado: "Activo", criticidad: "Media", contacto: "Contacto no especificado", area: "Área no especificada", requisitos: "No especificados", pasos: "No especificados", procedimientos: "No especificados", manuales: "No disponibles", forma_entrega: "No especificada", formularios: "No especificados", plazo: "No especificado", condiciones: "No especificadas", usuarios: "No especificados", excepciones: "No especificadas"
            };
            Object.keys(defaultData).forEach(key => {
                if (!service.hasOwnProperty(key)) service[key] = defaultData[key];
            });
        });
    });
});

// --- DOM ELEMENTS ---
const categoriesContainer = document.getElementById('categories-container');
const departmentsContainer = document.getElementById('departments-container');
const breadcrumbs = document.getElementById('breadcrumbs');
const searchInput = document.getElementById('search-input');
const introSection = document.getElementById('intro-section');
const noResults = document.getElementById('no-results');

const servicesModal = document.getElementById('services-modal');
const modalTitle = document.getElementById('modal-title');
const servicesList = document.getElementById('services-list');
const addServiceContainer = document.getElementById('add-service-container');

const serviceDetailModal = document.getElementById('service-detail-modal');
const serviceDetailTitle = document.getElementById('service-detail-title');
const serviceDetailContent = document.getElementById('service-detail-content');
const editServiceButtonContainer = document.getElementById('edit-service-button-container');

const editServiceModal = document.getElementById('edit-service-modal');
const editServiceForm = document.getElementById('edit-service-form');

// --- PROTOTYPE-SPECIFIC FUNCTIONS ---

function setupRoleSwitcher() {
    const roleToggle = document.getElementById('role-toggle');
    roleToggle.addEventListener('change', (e) => {
        appState.currentUser.role = e.target.checked ? 'admin' : 'viewer';
        // Re-render views to reflect role change
        if (servicesModal.style.display === 'block') {
            renderServices(appState.currentView.department);
        }
        if (serviceDetailModal.style.display === 'block' && appState.currentEditingService) {
            showServiceDetails(appState.currentEditingService);
        }
    });
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// --- CORE DISPLAY FUNCTIONS ---

function displayCategories() {
    categoriesContainer.innerHTML = '';
    appState.allData.categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>${category.name}</h3><p>${category.departments.length} departamentos</p>`;
        card.addEventListener('click', () => showDepartments(category));
        categoriesContainer.appendChild(card);
    });
}

function showDepartments(category) {
    appState.currentView.category = category;
    introSection.style.display = 'none';
    categoriesContainer.style.display = 'none';
    departmentsContainer.style.display = 'grid';
    departmentsContainer.innerHTML = '';
    category.departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.innerHTML = `<h3>${dept.name}</h3><p>${dept.services.length} servicios disponibles</p>`;
        card.addEventListener('click', () => showServices(dept));
        departmentsContainer.appendChild(card);
    });
    updateBreadcrumbs();
}

function showServices(department) {
    appState.currentView.department = department;
    modalTitle.textContent = department.name;
    renderServices(department);
    servicesModal.style.display = 'block';
}

function renderServices(department) {
    servicesList.innerHTML = '';
    department.services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `<h4>${service.name}</h4><p>${service.description}</p>`;
        serviceItem.addEventListener('click', () => showServiceDetails(service));
        servicesList.appendChild(serviceItem);
    });
    if (appState.currentUser.role === 'admin') {
        setupAdminControls(department);
    } else {
        addServiceContainer.innerHTML = '';
    }
}

function showServiceDetails(service) {
    appState.currentEditingService = service;
    serviceDetailTitle.textContent = service.name;
    serviceDetailContent.innerHTML = `
        <div class="field-label">DESCRIPCIÓN</div><div class="field-value">${service.description}</div>
        <div class="field-label">TIPO</div><div class="field-value">${service.tipo}</div>
        <div class="field-label">CATEGORÍA</div><div class="field-value">${service.categoria}</div>
        <div class="field-label">ESTADO</div><div class="field-value">${service.estado}</div>
        <div class="field-label">NIVEL DE CRITICIDAD</div><div class="field-value">${service.criticidad}</div>
        <div class="field-label">CONTACTO RESPONSABLE</div><div class="field-value">${service.contacto}</div>
        <div class="field-label">ÁREA</div><div class="field-value">${service.area}</div>
        <div class="field-label">REQUISITOS</div><div class="field-value">${service.requisitos}</div>
        <div class="field-label">PASOS</div><div class="field-value">${service.pasos}</div>
        <div class="field-label">PROCEDIMIENTOS</div><div class="field-value">${service.procedimientos}</div>
        <div class="field-label">MANUALES</div><div class="field-value">${service.manuales}</div>
        <div class="field-label">FORMA DE ENTREGA</div><div class="field-value">${service.forma_entrega}</div>
        <div class="field-label">FORMULARIOS</div><div class="field-value">${service.formularios}</div>
        <div class="field-label">PLAZO DE RESPUESTA</div><div class="field-value">${service.plazo}</div>
        <div class="field-label">CONDICIONES DE USO</div><div class="field-value">${service.condiciones}</div>
        <div class="field-label">USUARIOS</div><div class="field-value">${service.usuarios}</div>
        <div class="field-label">EXCEPCIONES</div><div class="field-value">${service.excepciones}</div>
    `;
    if (appState.currentUser.role === 'admin') {
        editServiceButtonContainer.innerHTML = `<button id="edit-service-btn">Editar Servicio</button>`;
        document.getElementById('edit-service-btn').addEventListener('click', () => showEditModal(service));
    } else {
        editServiceButtonContainer.innerHTML = '';
    }
    serviceDetailModal.style.display = 'block';
}

// --- EDITING AND ADMIN FUNCTIONS ---

function showEditModal(service) {
    appState.currentEditingService = service;
    const fields = [
        { key: 'name', label: 'Nombre del Servicio', type: 'input' }, { key: 'description', label: 'Descripción', type: 'textarea' }, { key: 'tipo', label: 'Tipo', type: 'select', options: ['Servicio', 'Trámite'] }, { key: 'categoria', label: 'Categoría', type: 'input' }, { key: 'estado', label: 'Estado', type: 'select', options: ['Activo', 'Inactivo'] }, { key: 'criticidad', label: 'Nivel de Criticidad', type: 'select', options: ['Baja', 'Media', 'Alta', 'Crítica'] }, { key: 'contacto', label: 'Contacto Responsable', type: 'input' }, { key: 'area', label: 'Área', type: 'input' }, { key: 'requisitos', label: 'Requisitos', type: 'textarea' }, { key: 'pasos', label: 'Pasos', type: 'textarea' }, { key: 'procedimientos', label: 'Procedimientos', type: 'textarea' }, { key: 'manuales', label: 'Manuales', type: 'textarea' }, { key: 'forma_entrega', label: 'Forma de Entrega', type: 'input' }, { key: 'formularios', label: 'Formularios', type: 'textarea' }, { key: 'plazo', label: 'Plazo de Respuesta', type: 'input' }, { key: 'condiciones', label: 'Condiciones de Uso', type: 'textarea' }, { key: 'usuarios', label: 'Usuarios', type: 'input' }, { key: 'excepciones', label: 'Excepciones', type: 'textarea' }
    ];
    editServiceForm.innerHTML = fields.map(field => {
        let formElement;
        if (field.type === 'textarea') {
            formElement = `<textarea id="edit-${field.key}" name="${field.key}">${service[field.key]}</textarea>`;
        } else if (field.type === 'select') {
            const options = field.options.map(opt => `<option value="${opt}" ${service[field.key] === opt ? 'selected' : ''}>${opt}</option>`).join('');
            formElement = `<select id="edit-${field.key}" name="${field.key}">${options}</select>`;
        } else {
            formElement = `<input type="text" id="edit-${field.key}" name="${field.key}" value="${service[field.key]}">`;
        }
        return `<div class="form-group"><label for="edit-${field.key}">${field.label}</label>${formElement}</div>`;
    }).join('') + `<div class="form-actions"><button type="button" class="cancel-btn">Cancelar</button><button type="submit" class="save-btn">Guardar Cambios</button></div>`;
    editServiceModal.style.display = 'block';
}

function saveServiceChanges(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
        appState.currentEditingService[key] = value;
    }
    editServiceModal.style.display = 'none';
    showServiceDetails(appState.currentEditingService);
    renderServices(appState.currentView.department);
    showToast("Cambios guardados para la sesión actual.");
}

function setupAdminControls(department) {
    addServiceContainer.innerHTML = `<button id="add-service-btn">Añadir Nuevo Servicio</button><form id="add-service-form" style="display:none;"><input type="text" id="new-service-name" placeholder="Nombre del Servicio" required><textarea id="new-service-desc" placeholder="Descripción del Servicio"></textarea><button type="submit">Guardar Servicio</button></form>`;
    document.getElementById('add-service-btn').addEventListener('click', (e) => {
        e.target.style.display = 'none';
        document.getElementById('add-service-form').style.display = 'block';
    });
    document.getElementById('add-service-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = document.getElementById('new-service-name').value;
        const newDesc = document.getElementById('new-service-desc').value;
        if (newName) {
            const newService = { name: newName, tipo: "Servicio", description: newDesc };
            Object.keys(department.services[0] || {}).forEach(key => {
                if (!newService.hasOwnProperty(key)) newService[key] = "Información pendiente de definir";
            });
            department.services.push(newService);
            renderServices(department);
        }
    });
}

// --- UTILITY AND EVENT LISTENERS ---

function updateBreadcrumbs() {
    breadcrumbs.innerHTML = '<a href="#" class="home-link">Inicio</a>';
    if(appState.currentView.category) {
        breadcrumbs.innerHTML += `<span>/</span><a href="#" class="category-link">${appState.currentView.category.name}</a>`;
    }
    document.querySelector('.home-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        appState.currentView = { category: null, department: null };
        searchInput.value = '';
        introSection.style.display = 'block';
        categoriesContainer.style.display = 'grid';
        departmentsContainer.style.display = 'none';
        noResults.style.display = 'none';
        displayCategories();
        updateBreadcrumbs();
    });
    document.querySelector('.category-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
        noResults.style.display = 'none';
        showDepartments(appState.currentView.category);
    });
}

document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

editServiceForm.addEventListener('submit', saveServiceChanges);
editServiceForm.addEventListener('click', (e) => {
    if (e.target.classList.contains('cancel-btn')) {
        editServiceModal.style.display = 'none';
    }
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allDepts = appState.allData.categories.flatMap(cat => cat.departments.map(dept => ({...dept, categoryName: cat.name, categoryId: cat.id})));
    const allServices = appState.allData.categories.flatMap(cat => cat.departments.flatMap(dept => dept.services.map(svc => ({...svc, deptName: dept.name, deptId: dept.id, categoryName: cat.name, categoryId: cat.id}))));
    
    if (searchTerm === '') {
        noResults.style.display = 'none';
        showDepartments(appState.currentView.category);
        return;
    }

    const filteredDepts = allDepts.filter(dept => dept.name.toLowerCase().includes(searchTerm));
    const deptsFromFilteredServices = allServices
        .filter(svc => svc.name.toLowerCase().includes(searchTerm))
        .map(svc => allDepts.find(d => d.id === svc.deptId))
        // Remove duplicates
        .filter((dept, index, self) => dept && self.findIndex(d => d.id === dept.id) === index);

    const filtered = [...filteredDepts, ...deptsFromFilteredServices].filter((dept, index, self) => dept && self.findIndex(d => d.id === dept.id) === index);

    introSection.style.display = 'none';
    categoriesContainer.style.display = 'none';
    departmentsContainer.style.display = 'grid';
    departmentsContainer.innerHTML = '';
    
    if (filtered.length > 0) {
        noResults.style.display = 'none';
        filtered.forEach(dept => {
            const card = document.createElement('div');
            card.className = 'department-card';
            card.innerHTML = `<h3>${dept.name}</h3><p>${dept.services.length} servicios disponibles</p><small style="color:#3498db;">En: ${dept.categoryName}</small>`;
            card.addEventListener('click', () => {
                const parentCategory = appState.allData.categories.find(cat => cat.id === dept.categoryId);
                appState.currentView.category = parentCategory;
                showServices(dept);
            });
            departmentsContainer.appendChild(card);
        });
    } else {
        noResults.style.display = 'block';
    }
    
    breadcrumbs.innerHTML = `<a href="#" class="home-link">Inicio</a><span>/</span><span>Resultados de Búsqueda</span>`;
    document.querySelector('.home-link').addEventListener('click', (e) => { e.preventDefault(); location.reload(); });
});

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    setupRoleSwitcher();
    updateBreadcrumbs();
});
