import Http from 'lib/Http';

const http = new Http();

export default class LeaveManagementService {
    static getLeaves(args) {
        return http.post({
            endpoint: '/admin/view-leaves',
            payload: args
        });
    }
    static approveLeave(args) {
        return http.post({
            endpoint: '/admin/approve-leave',
            payload: args
        });
    }
}
