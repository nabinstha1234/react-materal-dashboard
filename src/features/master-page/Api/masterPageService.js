import Http from 'lib/Http';

const http = new Http();

export default class MasterPageService {
    static getHolidays() {
        return http.get({
            endpoint: '/holidays'
        });
    }
    static getLeaves() {
        return http.get({
            endpoint: '/leave-types'
        });
    }
    static getProjects() {
        return http.get({
            endpoint: '/projects'
        });
    }
    static addHolidays(args) {
        return http.post({
            endpoint: '/admin/add-holiday',
            payload: args
        });
    }
    static addLeaveType(args) {
        return http.post({
            endpoint: '/admin/add-leave-type',
            payload: args
        });
    }
    static addProjects(args) {
        return http.post({
            endpoint: '/admin/create-project',
            payload: args
        });
    }
    static deletHoliday(args) {
        return http.post({
            endpoint: "/admin/delete-holiday",
            payload: args
        })
    }
    static deletLeaveType(args) {
        return http.post({
            endpoint: "/admin/delete-leave-type",
            payload: args
        })
    }
    static deletProject(args) {
        return http.post({
            endpoint: "/admin/delete-project",
            payload: args
        })
    }
}
