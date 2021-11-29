const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

function populateComments(signal) {
  return async (project) => {
    const url = `${API_BASE_URL}/projects/${project.project_id}/comments`;
    project.comments = await fetchJson(url, { headers, signal }, []);
    return project;
  };
}

function populateTasks(signal) {
  return async (project) => {
    const url = `${API_BASE_URL}/projects/${project.project_id}/tasks`;
    project.tasks = await fetchJson(url, { headers, signal }, []);
    return project;
  };
}

export async function createProject(data, signal) {
  const url = `${API_BASE_URL}/projects`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function listProjects(signal) {
  const url = new URL(`${API_BASE_URL}/projects`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function readProject(projectId, signal) {
  const url = new URL(`${API_BASE_URL}/projects/${projectId}`);
  const addComments = populateComments(signal);
  const addTasks = populateTasks(signal);
  return await fetchJson(url, { headers, signal }, {})
    .then(addComments)
    .then(addTasks);
}

export async function updateProject(data, projectId) {
  const url = `${API_BASE_URL}/projects/${projectId}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data }),
  };
  return await fetchJson(url, options);
}

export async function deleteProject(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}`;
  const options = {
    method: "DELETE",
    headers,
    signal,
  }
  return await fetchJson(url, options);
}

export async function createTask(data, signal) {
  const url = `${API_BASE_URL}/tasks`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function updateTask(data, taskId) {
  const url = `${API_BASE_URL}/tasks/${taskId}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data }),
  };
  return await fetchJson(url, options);
}

export async function updateTaskStatus(data, taskId, signal) {
  const url = `${API_BASE_URL}/tasks/${taskId}/status`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data }),
    signal,
  };
  return await fetchJson(url, options);
}