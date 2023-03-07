export class URLConstants {
    // User routes
    public static AUTHENTICATE_API: string = 'v1/users/authenticate';
    public static REGISTER_USER_API: string = 'v1/users/register';
    public static GET_USERS_API: string = 'v1/users/getAll';
    public static UPDATE_USER_API: string = 'v1/users/update';
    public static GET_USER_BY_ID_API: string = 'v1/users/getUserById';
    public static DELETE_USER_API: string = 'v1/users/deleteUser';
    public static GET_USER_NOTIFICATIONS_API: string = 'v1/users/getUserNotifications';

    // Role routes
    public static CREATE_ROLE_API: string = 'v1/roles/create';
    public static GET_ROLE_BY_ID_API: string = 'v1/roles/getById';
    public static GET_ROLES_API: string = 'v1/roles/getAll';

    // Event routes
    public static CREATE_EVENT_API: string = 'v1/events/create';
    public static GET_EVENT_BY_ID_API: string = 'v1/events/getById';
    public static GET_EVENTS_API: string = 'v1/events/getAll';

    // Youth routes
    public static CREATE_YOUTH_API: string = 'v1/youths/create';
    public static GET_YOUTH_BY_ID_API: string = 'v1/youths/getById';
    public static GET_YOUTHS_API: string = 'v1/youths/getAll';
    public static UPDATE_YOUTH_API: string = 'v1/youths/update';
    public static DELETE_YOUTH_API: string = 'v1/youths/delete/';

    // Tutor routes
    public static CREATE_TUTOR_API: string = 'v1/tutors/create';
    public static GET_TUTOR_BY_ID_API: string = 'v1/tutors/getById';
    public static GET_TUTORS_API: string = 'v1/tutors/getAll';
    public static UPDATE_TUTOR_API: string = 'v1/tutors/update';
    public static DELETE_TUTOR_API: string = 'v1/tutors/delete/';

    // Banner routes
    public static CREATE_BANNER_API: string = 'v1/banners/create';
    public static GET_BANNER_BY_ID_API: string = 'v1/banners/getById';
    public static GET_BANNERS_API: string = 'v1/banners/getAll';
    public static UPDATE_BANNER_API: string = 'v1/banners/update';
    public static DELETE_BANNER_API: string = 'v1/banners/delete/';
}