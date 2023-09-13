import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  role: string;
};

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  if (request.user.data.roles.includes(options.role)) {
    return request;
  }

  return new Response(`No way, you do not have the right role`, { status: 401 });
}
