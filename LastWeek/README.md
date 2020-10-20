## Setup K8s on Aws

1. Create k8s-controll Instance with image ubuntu

2. Create Role

-   Go to iam
-   Click role
-   CLick add role
-   give tag for youre role
-   add premission (ec2 full, route53 full, s3 full, iam full, vps full)

3. attach role to instance

-   go to ec2 dashbord
-   select youre instance
-   click action
-   instance seeting
-   Modify IAM role
-   select youre role
-   click save

4. Create route 53

-   go to route 53
-   click hostedzone
-   click hosted zone
-   input Domain name
-   select youre instance region
-   select youre instance vpcid
-   click created hosted zone

5. ssh to instance and install aws cli

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
apt install -y unzip python
unzip awscliv2.zip
sudo ./aws/install

```

6. install kubectl

```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

7. install kops

```bash
curl -LO https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64
chmod +x kops-linux-amd64
sudo mv kops-linux-amd64 /usr/local/bin/kops
```

8. config aws cli

```bash
aws configure

# AWS Access Key ID [None]:
# AWS Secret Access Key [None]:
# Default region name [None]: us-east-1
# Default output format [None]: json
```

9. create s3 bucket

```bash
aws s3api create-bucket \
    --bucket name-youre-bucket \
    --region us-east-1 # <- example region

# Note: We STRONGLY recommend versioning your S3 bucket in case you ever need to revert or recover a previous state store.

# versioning buccket
aws s3api put-bucket-versioning --bucket name-youre-bucket --versioning-configuration Status=Enabled

```

10. add to .bashrc

```bash
vi .bashrc

# copy line below and put on top of .bashrc file

export KOPS_STATE_STORE=s3://name-youre-bucket
export NAME=name.youre.cluster

# run this after copy
source .bashrc
```

11. generate ssh password

```bash
ssh-keygen
```

12. list availibillity zone

```bash
aws ec2 describe-availability-zones
```

13. create cluster with kops

```bash
kops create cluster --cloud=aws --zones=youre-zone --name=$NAME --node-size=t2.medium --master-size=t2.medium --dns-zone=youre-dns.com --dns private

# example
# kops create cluster --cloud=aws --zones=us-east-1a --name=$NAME --node-size=t2.medium --master-size=t2.medium --dns-zone=devops.com --dns private
```

14. edit configuration

```bash
kops edit ig --name=$NAME nodes
kops edit ig --name=$NAME master-us-east-1a
```

15. finish and create cluster

```bash
kops update cluster --name $NAME --yes
```

16. check cluster

```bash
kops validate cluster --wait 10m
# or
kops validate cluster
```

17. ssh to master node

```bash
ssh -i ~/.ssh/id_rsa ubuntu@api.$NAME
```

18. delete cluster

```bash
kops delete cluster --name=$NAME --state=$KOPS_STATE_STORE --yes
```
