import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from projectapp.models import Project, ToDo
from userapp.models import User


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(ObjectType):
    projects = graphene.List(ProjectType)
    todos = graphene.List(ToDoType)
    users = graphene.List(UserType)

    def resolve_projects(root, info):
        return Project.objects.all()

    def resolve_todos(root, info):
        return ToDo.objects.all()

    def resolve_users(root, info):
        return User.objects.all()


schema = graphene.Schema(query=Query)

# lev1
# class Query(ObjectType):
#     hello = graphene.String(default_value="Hi!")
#
#
# schema = graphene.Schema(query=Query)


# lev2
# class ProjectType(DjangoObjectType):
#     class Meta:
#         model = Project
#         fields = '__all__'
#
#
# class Query(ObjectType):
#     projects = graphene.List(ProjectType)
#
#     def resolve_projects(root, info):
#         return Project.objects.all()
#
#
# schema = graphene.Schema(query=Query)


# lev3
# class ProjectType(DjangoObjectType):
#     class Meta:
#         model = Project
#         fields = '__all__'
#
#
# class ToDoType(DjangoObjectType):
#     class Meta:
#         model = ToDo
#         fields = '__all__'
# class UserType(DjangoObjectType):
#     class Meta:
#         model = User
#         fields = '__all__'
#
# class Query(ObjectType):
#     projects = graphene.List(ProjectType)
#     todos = graphene.List(ToDoType)
#     users = graphene.List(UserType)
#
#     def resolve_projects(root, info):
#         return Project.objects.all()
#
#     def resolve_todos(root, info):
#         return ToDo.objects.all()
#
#     def resolve_users(root, info):
#         return User.objects.all()
#
#
# schema = graphene.Schema(query=Query)


# lev 4
#
# class ProjectType(DjangoObjectType):
#     class Meta:
#         model = Project
#         fields = '__all__'
#
#
# class ToDoType(DjangoObjectType):
#     class Meta:
#         model = ToDo
#         fields = '__all__'
#
#
# class UserType(DjangoObjectType):
#     class Meta:
#         model = User
#         fields = '__all__'
#
#
# class Query(ObjectType):
#     project_by_username = graphene.List(ProjectType, name=graphene.String(required=False))
#
#     def resolve_project_by_username(root, info, name=None):
#         projects = Project.objects.all()
#         if name:
#             projects = projects.filter(users__username=name)
#         return projects
#
#
# schema = graphene.Schema(query=Query)


# lev 5
#
# class ProjectType(DjangoObjectType):
#     class Meta:
#         model = Project
#         fields = '__all__'
#
#
# class ToDoType(DjangoObjectType):
#     class Meta:
#         model = ToDo
#         fields = '__all__'
#
#
# class UserType(DjangoObjectType):
#     class Meta:
#         model = User
#         fields = '__all__'
#
#
# class Query(ObjectType):
#     todo_by_username = graphene.List(ToDoType, name=graphene.String(required=False))
#
#     def resolve_project_by_username(root, info, name=None):
#         project = Project.objects.all()
#         if name:
#             project = project.filter(users__username=name)
#         return project
#
#
# class ProjectUpdateMutation(graphene.Mutation):
#     class Arguments:
#         name = graphene.String(required=True)
#         id = graphene.ID()
#
#     project = graphene.Field(ProjectType)
#
#     @classmethod
#     def mutate(cls, root, info, name, id):
#         project = Project.objects.get(id=id)
#         project.name = name
#         project.save()
#         return ProjectUpdateMutation(project=project)
#
#
# class Mutations(ObjectType):
#     update_project = ProjectUpdateMutation.Field()
#
#
# schema = graphene.Schema(query=Query, mutation=Mutations)


# class ProjectType(DjangoObjectType):
#     class Meta:
#         model = Project
#         fields = '__all__'
#
#
# class ToDoType(DjangoObjectType):
#     class Meta:
#         model = ToDo
#         fields = '__all__'
#
#
# class UserType(DjangoObjectType):
#     class Meta:
#         model = User
#         fields = '__all__'
#
#
# class Query(ObjectType):
#     project_by_username = graphene.List(ProjectType, name=graphene.String(required=False))
#     todo_by_username = graphene.List(ToDoType, name=graphene.String(required=False))
#
#     def resolve_project_by_username(root, info, name=None):
#         projects = Project.objects.all()
#         if name:
#             projects = projects.filter(users__username=name)
#         return projects
#
#     def resolve_todo_by_username(root, info, name=None):
#         todos = ToDo.objects.all()
#         if name:
#             todos = todos.filter(users__username=name)
#         return todos
#
#
# schema = graphene.Schema(query=Query)
