import {
    IAuthContextData, IAuthProvider,
    IResponseUser, IUser
} from '../interfaces/user.interface'
import React, { createContext, useState, useCallback } from 'react'
import api from '../services/api'
import { apiUser } from 'services/data'
import { isAfter, parseISO } from 'date-fns'
import { useNAvigate } from 'react-router-dom'

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

