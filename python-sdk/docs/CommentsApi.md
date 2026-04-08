# openapi_client.CommentsApi

All URIs are relative to *https://api.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articles_id_comments_get**](CommentsApi.md#articles_id_comments_get) | **GET** /articles/{id}/comments | Get comments for article
[**articles_id_comments_post**](CommentsApi.md#articles_id_comments_post) | **POST** /articles/{id}/comments | Add comment to article
[**comments_id_delete**](CommentsApi.md#comments_id_delete) | **DELETE** /comments/{id} | Delete comment by ID


# **articles_id_comments_get**
> List[Comment] articles_id_comments_get(id)

Get comments for article

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | 

    try:
        # Get comments for article
        api_response = api_instance.articles_id_comments_get(id)
        print("The response of CommentsApi->articles_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->articles_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comments retrieved successfully |  -  |
**404** | Article not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articles_id_comments_post**
> Comment articles_id_comments_post(id, comment_input)

Add comment to article

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.comment_input import CommentInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | 
    comment_input = openapi_client.CommentInput() # CommentInput | 

    try:
        # Add comment to article
        api_response = api_instance.articles_id_comments_post(id, comment_input)
        print("The response of CommentsApi->articles_id_comments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->articles_id_comments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **comment_input** | [**CommentInput**](CommentInput.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment created successfully |  -  |
**404** | Article not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **comments_id_delete**
> comments_id_delete(id)

Delete comment by ID

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | 

    try:
        # Delete comment by ID
        api_instance.comments_id_delete(id)
    except Exception as e:
        print("Exception when calling CommentsApi->comments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Comment deleted successfully |  -  |
**404** | Comment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

