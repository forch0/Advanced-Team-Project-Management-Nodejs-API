// Copyright 2025 fortu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const Roles = {
    OWNER: "OWNER",
    ADMIN: "ADMIN",
    MEMBER: "MEMBER",
  } as const;
  
  export type RoleType = keyof typeof Roles;
  
  export const Permissions = {
    CREATE_WORKSPACE: "CREATE_WORKSPACE",
    DELETE_WORKSPACE: "DELETE_WORKSPACE",
    EDIT_WORKSPACE: "EDIT_WORKSPACE",
    MANAGE_WORKSPACE_SETTINGS: "MANAGE_WORKSPACE_SETTINGS",
  
    ADD_MEMBER: "ADD_MEMBER",
    CHANGE_MEMBER_ROLE: "CHANGE_MEMBER_ROLE",
    REMOVE_MEMBER: "REMOVE_MEMBER",
  
    CREATE_PROJECT: "CREATE_PROJECT",
    EDIT_PROJECT: "EDIT_PROJECT",
    DELETE_PROJECT: "DELETE_PROJECT",
  
    CREATE_TASK: "CREATE_TASK",
    EDIT_TASK: "EDIT_TASK",
    DELETE_TASK: "DELETE_TASK",
  
    VIEW_ONLY: "VIEW_ONLY",
  } as const;
  
  export type PermissionType = keyof typeof Permissions;