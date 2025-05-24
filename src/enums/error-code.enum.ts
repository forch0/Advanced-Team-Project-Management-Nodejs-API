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

export const ErrorCodeEnum = {
    AUTH_EMAIL_ALREADY_EXISTS: "AUTH_EMAIL_ALREADY_EXISTS",
    AUTH_INVALID_TOKEN: "AUTH_INVALID_TOKEN",
    AUTH_USER_NOT_FOUND: "AUTH_USER_NOT_FOUND",
  
    AUTH_NOT_FOUND: "AUTH_NOT_FOUND",
    AUTH_TOO_MANY_ATTEMPTS: "AUTH_TOO_MANY_ATTEMPTS",
    AUTH_UNAUTHORIZED_ACCESS: "AUTH_UNAUTHORIZED_ACCESS",
    AUTH_TOKEN_NOT_FOUND: "AUTH_TOKEN_NOT_FOUND",
  
    // Access Control Errors
    ACCESS_UNAUTHORIZED: "ACCESS_UNAUTHORIZED",
  
    // Validation and Resource Errors
    VALIDATION_ERROR: "VALIDATION_ERROR",
    RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  
    // System Errors
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  } as const;
  
  export type ErrorCodeEnumType = keyof typeof ErrorCodeEnum;