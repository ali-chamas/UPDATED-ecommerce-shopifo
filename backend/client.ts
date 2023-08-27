import SanityClient from 'next-sanity-client';

export const client = new SanityClient({
    projectId: "9uexs5u1",
    dataset: "production",
    apiVersion: "2022-08-22",
    useCdn: true,
    token: 'skzGONwmw7d6zx8Ci5zZxCjrxUixyiEE76jxdfrx00egS1y87Eq7RuPqxzdqfxfHDfPHRqJ0uzZTU1WTOrexcYiu4r8EC6Hc4PzdFT1PKKofXySYNiBmOce6kHNDZc2LhUQcAuYrortCNKwiy0iFwNBhaB8oYiNzlwHxXj0srjxVWSZ3hMJY'
    
})